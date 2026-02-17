---
title: "SalesRAG"
description: "RAG-powered sales chatbot API that connects an LLM to your product catalog for real product recommendations using hybrid semantic + fuzzy search"
image: "/images/projects/project-7.jpg"
technologies: ["TypeScript", "PostgreSQL", "pgvector", "Ollama", "Express", "RAG"]
githubUrl: "https://github.com/darwin808/salesRAG"
featured: true
order: 0
---

A sales chatbot API that uses Retrieval-Augmented Generation to answer product questions from a real database — no hallucinated answers. Ask natural language questions like "I need a laptop for video editing under $1500" and get recommendations backed by actual catalog data.

Built with a hybrid search approach combining pgvector cosine similarity (70%) and pg_trgm fuzzy text matching (30%) for accurate product retrieval. Runs entirely locally using Ollama for LLM inference and embeddings, with PostgreSQL as the single source of truth.
