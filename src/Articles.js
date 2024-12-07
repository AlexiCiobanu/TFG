import React from 'react';
import './ArticleCard.css'; // Importa el archivo CSS actualizado

function Articles() {
  const articles = [
    {
      id: 1,
      title: "Avances en la lucha contra el cáncer",
      description: "Los avances recientes en la lucha contra el cáncer incluyen el uso de inteligencia artificial para la detección temprana...",
      fullText: `
      Los avances recientes en la lucha contra el cáncer incluyen el uso de inteligencia artificial para la detección temprana y la secuenciación del ADN de tumores. Esto permite diagnósticos más rápidos y tratamientos más específicos.

      Investigadores en centros de todo el mundo están utilizando algoritmos avanzados para identificar patrones en las células cancerosas, lo que mejora la precisión de los tratamientos y reduce el riesgo de efectos secundarios. Este enfoque también ayuda a personalizar la terapia para cada paciente.

      Además, la nanotecnología está proporcionando nuevas formas de administrar medicamentos directamente a las células cancerosas sin dañar las células sanas, lo que representa un gran paso adelante en los tratamientos oncológicos.
      `
    },
    {
      id: 2,
      title: "La escala y el impacto del COVID prolongado",
      description: "Un estudio reciente destaca el impacto social y económico de la condición conocida como COVID prolongado, que afecta a millones...",
      fullText: `
      El COVID prolongado afecta a millones de personas en todo el mundo, causando síntomas debilitantes como fatiga crónica y problemas cognitivos. Los investigadores están trabajando en nuevas terapias para aliviar los síntomas y mejorar la calidad de vida de los afectados.

      Diversos estudios han identificado múltiples factores que podrían contribuir al COVID prolongado, incluyendo la respuesta inmune del cuerpo y la posibilidad de inflamación persistente. Esto ha abierto el camino a tratamientos potenciales que abordan estos mecanismos subyacentes.

      La Organización Mundial de la Salud ha lanzado programas de apoyo para los afectados y ha instado a los gobiernos a invertir en investigación y atención médica específica para esta condición.
      `
    },
    {
      id: 3,
      title: "Inteligencia artificial en la educación médica",
      description: "Harvard Medical School está integrando la inteligencia artificial en su currículum para preparar a la próxima generación...",
      fullText: `
      Harvard Medical School ha lanzado un programa para integrar la inteligencia artificial en el entrenamiento médico, mejorando el diagnóstico y tratamiento en tiempo real. Esto es parte de un esfuerzo más amplio por adaptar el sistema de salud a las tecnologías emergentes.

      Los estudiantes de medicina están aprendiendo a utilizar herramientas de inteligencia artificial para interpretar imágenes médicas, como resonancias magnéticas y tomografías, lo cual reduce el margen de error y mejora la eficiencia.

      Además, los avances en IA permiten el análisis de grandes volúmenes de datos clínicos, lo que facilita la investigación y el desarrollo de nuevas terapias. Esta iniciativa está preparando a los futuros médicos para un entorno donde la tecnología será una parte integral de la práctica médica.
      `
    }
  ];

  return (
    <div className="articles-container">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          description={article.description}
          fullText={article.fullText}
        />
      ))}
    </div>
  );
}

function ArticleCard({ title, description, fullText }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleText = () => setIsExpanded(!isExpanded);

  return (
    <div className="bgblue"> {/* Clase para el contenedor con fondo degradado */}
      <div className="card"> {/* Clase de estilo para cada tarjeta */}
        <h3>{title}</h3>
        <p>{isExpanded ? fullText : description}</p>
        <button onClick={toggleText} className="button">
          {isExpanded ? "Ver Menos" : "Ver Más"}
        </button>
      </div>
    </div>
  );
}

export default Articles;
