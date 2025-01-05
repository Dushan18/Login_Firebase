const preguntaslist = document.querySelector('.preguntas');

export const setupPreguntas = (data) => {
    if (!preguntaslist) {
        console.error("El elemento '.preguntas' no existe en el DOM.");
        return;
    }

    if (data.length) {
        let html = `
            <br>
                <h2 class="text-center">TABLE I CONCEPTUAL DEFINITION OF THE PROPOSED CSF </h2>
            <br>
            <table class="table table-hover">
                <thead class="shadow-lg text-center">
                    <tr>
                        <th style="max-width: 150px;">CSF</th>
                        <th style="max-width: 200px;">Description</th> <!-- Limitar ancho de la celda -->
                        <th>Métricas</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
        `;

        data.forEach((doc) => {
            const preguntas = doc.data();
            html += `
                <tr>
                    <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">${preguntas.ID}</td>
                    <td style="max-width: 200px; word-wrap: break-word; white-space: normal;">${preguntas.Description}</td>
                    <td class="text-center">${preguntas.Metrics}</td>
                    <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">
                        <select class="form-select answer-select" data-id="${doc.id}">
                            <option value="concluido" ${preguntas.Answer ? "selected" : ""}>Concluido</option>
                            <option value="no-concluido" ${!preguntas.Answer ? "selected" : ""}>No Concluido</option>
                        </select>
                    </td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
        `;

        preguntaslist.innerHTML = html;

        document.querySelectorAll('.answer-select').forEach((select) => {
            select.addEventListener('change', async (e) => {
                const id = e.target.dataset.id;
                const value = e.target.value;
                console.log(`ID: ${id}, Estado seleccionado: ${value}`);

                try {
                    const newValue = value === "concluido";
                    await updateFirestore(id, newValue);
                    console.log(`Documento con ID ${id} actualizado a ${newValue ? "Concluido" : "No Concluido"}`);
                } catch (error) {
                    console.error("Error al actualizar Firestore:", error);
                }
            });
        });
    } else {
        preguntaslist.innerHTML = '<div class="text-center"><h1>Ingenieria de Sistemas</h1><img height="300"  width="300" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmu5kVYMTEDvnQ9OldM5j6B8TXBgmINwfBSw&s"></div>';
    }
};
