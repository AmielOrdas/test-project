import { useEffect, useRef } from "react";

function useOnMountUnsafe(passedUseEffect, watchVariable) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      passedUseEffect();
    }
  }, [watchVariable]);
}

export default useOnMountUnsafe;
