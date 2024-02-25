import { useEffect, useRef } from "react";

function useOnMountUnsafe(passedUseEffect) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      passedUseEffect();
    }
  }, []);
}

export default useOnMountUnsafe;
