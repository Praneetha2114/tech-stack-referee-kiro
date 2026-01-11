function compare() {
  const context = document.getElementById("context").value;

  let python = "";
  let java = "";
  let tradeoff = "";

  if (context === "backend") {
    python = "Pros: Faster development, rich frameworks (Flask, Django). Cons: Slower performance at scale.";
    java = "Pros: Strong performance, scalability, robust ecosystem. Cons: More boilerplate code.";
    tradeoff = "Python favors speed and simplicity, while Java favors long-term scalability and performance.";
  }

  if (context === "data") {
    python = "Pros: Excellent libraries (NumPy, Pandas). Cons: Slower raw execution.";
    java = "Pros: Strong concurrency. Cons: Limited data-science ecosystem.";
    tradeoff = "Python dominates data workloads, while Java fits data pipelines needing concurrency.";
  }

  if (context === "enterprise") {
    python = "Pros: Flexibility and rapid prototyping. Cons: Less strict structure.";
    java = "Pros: Type safety, stability, enterprise trust. Cons: Slower iteration speed.";
    tradeoff = "Java is preferred for structured enterprise systems, Python for rapid internal tools.";
  }

  if (context === "learning") {
    python = "Pros: Easy syntax, beginner-friendly. Cons: Less enforced discipline.";
    java = "Pros: Teaches strong fundamentals. Cons: Steeper learning curve.";
    tradeoff = "Python lowers entry barriers, while Java builds long-term engineering discipline.";
  }

  document.getElementById("python").textContent = python;
  document.getElementById("java").textContent = java;
  document.getElementById("tradeoff").textContent = tradeoff;
}

