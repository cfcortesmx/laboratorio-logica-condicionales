import { describe, it, expect } from "vitest";
import {
  evaluarLogicaBooleana,
  clasificarNumero,
  clasificarTriangulo,
  calcularTarifaDescuento,
} from "../src/app.js";

describe("RED 1: Laboratorio de Lógica Booleana y Condicionales", () => {
  describe("Módulo 1: Operadores Lógicos y Tablas de Verdad", () => {
    it("debe evaluar correctamente el operador AND", () => {
      expect(evaluarLogicaBooleana(true, true, "AND")).toBe(true);
      expect(evaluarLogicaBooleana(true, false, "AND")).toBe(false);
    });

    it("debe evaluar correctamente el operador OR", () => {
      expect(evaluarLogicaBooleana(false, true, "OR")).toBe(true);
      expect(evaluarLogicaBooleana(false, false, "OR")).toBe(false);
    });

    it("debe evaluar correctamente el operador XOR (disyunción exclusiva)", () => {
      expect(evaluarLogicaBooleana(true, false, "XOR")).toBe(true);
      expect(evaluarLogicaBooleana(true, true, "XOR")).toBe(false);
      expect(evaluarLogicaBooleana(false, false, "XOR")).toBe(false);
    });

    it("debe evaluar correctamente el operador NAND", () => {
      expect(evaluarLogicaBooleana(true, true, "NAND")).toBe(false);
      expect(evaluarLogicaBooleana(true, false, "NAND")).toBe(true);
    });
  });

  describe("Módulo 2: Clasificación de Números", () => {
    it("debe clasificar el cero de forma unívoca", () => {
      expect(clasificarNumero(0)).toBe("cero");
    });

    it("debe clasificar enteros positivos pares e impares", () => {
      expect(clasificarNumero(4)).toBe("positivo par");
      expect(clasificarNumero(7)).toBe("positivo impar");
    });

    it("debe clasificar enteros negativos pares e impares", () => {
      expect(clasificarNumero(-6)).toBe("negativo par");
      expect(clasificarNumero(-9)).toBe("negativo impar");
    });
  });

  describe("Módulo 3: Clasificador Geométrico de Triángulos", () => {
    it("debe identificar triángulos equiláteros", () => {
      expect(clasificarTriangulo(5, 5, 5)).toBe("equilatero");
    });

    it("debe identificar triángulos isósceles", () => {
      expect(clasificarTriangulo(5, 5, 3)).toBe("isosceles");
      expect(clasificarTriangulo(4, 7, 7)).toBe("isosceles");
    });

    it("debe identificar triángulos escalenos válidos", () => {
      expect(clasificarTriangulo(3, 4, 5)).toBe("escaleno");
    });

    it("debe invalidar figuras que violan la desigualdad triangular o tienen lados <= 0", () => {
      expect(clasificarTriangulo(1, 2, 10)).toBe("invalido");
      expect(clasificarTriangulo(0, 4, 4)).toBe("invalido");
      expect(clasificarTriangulo(-3, 4, 5)).toBe("invalido");
    });
  });

  describe("Módulo 4: Sistema de Tarifas y Condiciones Compuestas", () => {
    it("debe otorgar 50% de descuento a adultos mayores (60+ años)", () => {
      expect(calcularTarifaDescuento(65, false, false)).toBe(50);
      expect(calcularTarifaDescuento(70, true, true)).toBe(50);
    });

    it("debe otorgar 40% de descuento a niños (<12 años)", () => {
      expect(calcularTarifaDescuento(10, false, false)).toBe(40);
    });

    it("debe otorgar 30% a estudiantes con membresía y 20% solo estudiante", () => {
      expect(calcularTarifaDescuento(20, true, true)).toBe(30);
      expect(calcularTarifaDescuento(20, true, false)).toBe(20);
    });

    it("debe otorgar 15% a miembros generales y 0% sin beneficios", () => {
      expect(calcularTarifaDescuento(35, false, true)).toBe(15);
      expect(calcularTarifaDescuento(35, false, false)).toBe(0);
    });
  });
});
