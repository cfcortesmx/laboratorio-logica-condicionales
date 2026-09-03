/**
 * Laboratorio Virtual Interactivo para Lógica Booleana y Control de Flujo Condicional
 * Facultad de Telemática — Universidad de Colima
 * Asignatura: Fundamentos de Programación
 * Autor: Dr. Carlos Flores Cortés (cfcortes@ucol.mx)
 */

/**
 * MÓDULO 1: Evaluación de Operadores Lógicos y Tablas de Verdad
 * Evalúa expresiones lógicas compuestas para los operadores estándar.
 */
export function evaluarLogicaBooleana(
  a: boolean,
  b: boolean,
  operador: "AND" | "OR" | "XOR" | "NAND"
): boolean {
  switch (operador) {
    case "AND":
      return a && b;
    case "OR":
      return a || b;
    case "XOR":
      return (a || b) && !(a && b);
    case "NAND":
      return !(a && b);
    default:
      throw new Error(`Operador no soportado: ${operador}`);
  }
}

/**
 * MÓDULO 2: Clasificación y Evaluación de Rangos Numéricos
 * Clasifica un número según su signo y paridad en una sola cadena descriptiva.
 */
export function clasificarNumero(n: number): string {
  if (n === 0) return "cero";
  const signo = n > 0 ? "positivo" : "negativo";
  const paridad = Math.abs(n) % 2 === 0 ? "par" : "impar";
  return `${signo} ${paridad}`;
}

/**
 * MÓDULO 3: Validador y Clasificador Geométrico de Triángulos
 * Determina si tres longitudes forman un triángulo válido según el teorema
 * de la desigualdad triangular y clasifica su tipo.
 */
export function clasificarTriangulo(
  a: number,
  b: number,
  c: number
): "equilatero" | "isosceles" | "escaleno" | "invalido" {
  if (a <= 0 || b <= 0 || c <= 0) return "invalido";
  if (a + b <= c || a + c <= b || b + c <= a) return "invalido";

  if (a === b && b === c) return "equilatero";
  if (a === b || a === c || b === c) return "isosceles";
  return "escaleno";
}

/**
 * MÓDULO 4: Sistema de Tarifas con Condiciones Combinadas
 * Calcula el porcentaje de descuento aplicable según edad, membresía y condición de estudiante.
 */
export function calcularTarifaDescuento(
  edad: number,
  esEstudiante: boolean,
  esMiembro: boolean
): number {
  if (edad < 0 || edad > 120) throw new Error("Edad inválida");
  
  // Adultos mayores (60+ años) tienen descuento prioritario
  if (edad >= 60) return 50;
  
  // Niños menores de 12 años
  if (edad < 12) return 40;
  
  // Estudiantes con membresía obtienen descuento acumulado
  if (esEstudiante && esMiembro) return 30;
  if (esEstudiante) return 20;
  if (esMiembro) return 15;
  
  return 0; // Sin descuento
}
