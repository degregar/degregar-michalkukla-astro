import React, { useState } from 'react';

interface Field {
  name: string;
  type: 'tekst' | 'liczba' | 'prawda/fałsz' | 'lista tekstów' | 'lista liczb';
  example: string;
}

const PromptGenerator: React.FC = () => {
  const [exampleText, setExampleText] = useState<string>('');
  const [fields, setFields] = useState<Field[]>([]);
  const [prompt, setPrompt] = useState<string>('');

  const handleAddField = () => {
    setFields([...fields, { name: '', type: 'tekst', example: '' }]);
  };

  const handleFieldChange = (index: number, field: keyof Field, value: string) => {
    const newFields = [...fields];
    // @ts-ignore
    newFields[index][field] = value;
    setFields(newFields);
  };

  const generatePrompt = () => {
    const fieldsDescription = fields
      .map((field) => {
        return `- ${field.name}: ${field.type}, przykład: ${field.example}`;
      })
      .join('\n');

    const prompt = `
Przetwórz poniższy tekst na ustrukturyzowane dane w formacie JSON. Upewnij się, że w JSON znajdują się następujące pola:

Przykładowy tekst:
---
${exampleText}
---

Format danych:
${fieldsDescription}

Wymagany format JSON:
{
${fields.map((field) => `  "${field.name}": ${getExampleValue(field.type, field.example)}`).join(',\n')}
}
    `;
    setPrompt(prompt);
  };

  const getExampleValue = (type: Field['type'], example: string) => {
    switch (type) {
      case 'tekst':
        return `"${example}"`;
      case 'liczba':
        return example;
      case 'prawda/fałsz':
        return example.toLowerCase() === 'prawda' ? 'true' : 'false';
      case 'lista tekstów':
        return `[${example
          .split(',')
          .map((item) => `"${item.trim()}"`)
          .join(', ')}]`;
      case 'lista liczb':
        return `[${example
          .split(',')
          .map((item) => item.trim())
          .join(', ')}]`;
      default:
        return `"${example}"`;
    }
  };

  return (
    <div>
      <h1>Generator Promptów</h1>

      <div>
        <h2>1. Przykładowy tekst do przetworzenia</h2>
        <textarea
          value={exampleText}
          onChange={(e) => setExampleText(e.target.value)}
          placeholder="Wprowadź przykładowy tekst..."
          rows={6}
          style={{ width: '100%' }}
        />
      </div>

      <div>
        <h2>2. Zdefiniuj format danych</h2>
        {fields.map((field, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <input
              type="text"
              value={field.name}
              onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
              placeholder="Nazwa pola"
              style={{ marginRight: '10px' }}
            />
            <select value={field.type} onChange={(e) => handleFieldChange(index, 'type', e.target.value)} style={{ marginRight: '10px' }}>
              <option value="tekst">Tekst</option>
              <option value="liczba">Liczba</option>
              <option value="prawda/fałsz">Prawda/Fałsz</option>
              <option value="lista tekstów">Lista tekstów</option>
              <option value="lista liczb">Lista liczb</option>
            </select>
            <input
              type="text"
              value={field.example}
              onChange={(e) => handleFieldChange(index, 'example', e.target.value)}
              placeholder="Przykład danych"
            />
          </div>
        ))}
        <button onClick={handleAddField}>Dodaj pole</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={generatePrompt}>Generuj Prompt</button>
      </div>

      {prompt && (
        <div style={{ marginTop: '20px' }}>
          <h2>Wygenerowany Prompt</h2>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{prompt}</pre>
          <button onClick={() => navigator.clipboard.writeText(prompt)}>Skopiuj do schowka</button>
        </div>
      )}
    </div>
  );
};

export default PromptGenerator;
