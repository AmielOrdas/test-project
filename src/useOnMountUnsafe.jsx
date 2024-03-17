import { useEffect, useRef } from "react";

function useOnMountUnsafe(passedUseEffect, watchVariable) {
  const initialized = useRef(false);

  useEffect(() => {
    console.log(initialized.current);
    if (!initialized.current) {
      initialized.current = true;
      passedUseEffect();
    }
  }, [watchVariable]);
}

export default useOnMountUnsafe;
