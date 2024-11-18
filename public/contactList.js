// Lista inicial de contactos
let contactList = [
    { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
    { name: "Jane Smith", phone: "2345 678 901", email: "jane.smith@example.com" },
    { name: "Bob Johnson", phone: "3456 789 012", email: "bob.johnson@example.com" }
];

// Mostrar lista inicial de contactos
console.log("Initial contact List:", contactList);

// Agregar un nuevo contacto
contactList.push({ name: "Maisie Haley", phone: "0913 531 3030", email: "risus.Quisque@urna.ca" });
console.log("Updated contact List with new contact:", contactList);

// Mostrar primer y último contacto
console.log("First contact:", contactList[0]);
console.log("Last contact:", contactList[contactList.length - 1]);