import React from "react";
import { useEffect } from "react";

export default function Produto() {
  const verificar = sessionStorage.getItem("usuario-validado");

  useEffect(() => {
    if (verificar == null) {
      window.location = "/";
    }
  }, []);

  return <div>Produto</div>;
}
