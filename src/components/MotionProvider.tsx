"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type MotionCtx = {
  enabled: boolean;
  toggle: () => void;
};

const Ctx = createContext<MotionCtx>({ enabled: true, toggle: () => {} });

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [motionChoice, setMotionChoice] = useState<boolean | null>(null);
  const enabled = motionChoice ?? !prefersReduced;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReduced(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("motion-off", !enabled);
  }, [enabled]);

  const toggle = useCallback(
    () => setMotionChoice((choice) => !(choice ?? !prefersReduced)),
    [prefersReduced],
  );
  const value = useMemo(() => ({ enabled, toggle }), [enabled, toggle]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useMotion() {
  return useContext(Ctx);
}
