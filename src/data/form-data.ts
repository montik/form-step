interface FieldAttributes {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    min?: string;
    max?: string;
    editable?: boolean;
  }
  
  export interface FormField {
    name: string;
    type: 'text' | 'email' | 'date' | 'number' | 'textarea' | 'summary';  // Add more types as needed
    attributes: FieldAttributes;
    value?: string;
  }
  
  export interface ValidationStep {
    title: string;
    fields: FormField[];
  }
  
  export interface FormStructure {
    validationSteps: ValidationStep[];
  }
  
  const formStructure: FormStructure = {
    validationSteps: [
      {
        title: "Persönliche Informationen",
        fields: [
          {
            name: "Vorname",
            type: "text",
            attributes: {
              required: true,
            },
          },
          {
            name: "Nachname",
            type: "text",
            attributes: {
              required: true,
            },
          },
          {
            name: "Geburtsdatum",
            type: "date",
            attributes: {
              required: true,
              max: "today",
            },
          },
          {
            name: "E-Mail-Adresse",
            type: "email",
            attributes: {
              required: true,
              pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
            },
          },
        ],
      },
      {
        title: "Adressinformationen",
        fields: [
          {
            name: "Straße",
            type: "text",
            attributes: {
              required: true,
            },
          },
          {
            name: "Hausnummer",
            type: "text",
            attributes: {
              required: true,
            },
          },
          {
            name: "Stadt",
            type: "text",
            attributes: {
              required: true,
            },
          },
          {
            name: "Postleitzahl",
            type: "text",
            attributes: {
              required: true,
              minLength: 5,
            },
          },
          {
            name: "Land",
            type: "text",
            attributes: {
              required: true,
            },
          },
        ],
      },
      {
        title: "Zahlungsinformationen",
        fields: [
          {
            name: "Kreditkartennummer",
            type: "text",
            attributes: {
              required: true,
              pattern: "^[0-9]{16}$",
            },
          },
          {
            name: "Ablaufdatum",
            type: "date",
            attributes: {
              required: true,
              min: "today",
            },
          },
          {
            name: "CVV",
            type: "text",
            attributes: {
              required: true,
              pattern: "^[0-9]{3}$",
            },
          },
        ],
      },
    ],
  };
  
  export default formStructure;