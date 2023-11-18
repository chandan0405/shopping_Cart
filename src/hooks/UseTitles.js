import { useEffect } from "react";

function UseTitles(title ) {
  useEffect(() => {
    document.title = `${title} | Shopping Cart`;
  }, [title]);
  return null;
}

export default UseTitles;
