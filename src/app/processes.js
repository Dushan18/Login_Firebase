const preguntaslist = document.querySelector('.preguntas3');

export const setupPreguntas3 = (data) => {
    if (!preguntaslist) {
        console.error("El elemento '.preguntas3' no existe en el DOM.");
        return;
    }

    if (data.length) {
        let html = `
            <br>
                <h2 class="text-center">TABLE III METRICS FOR THE CSF: PROCESSES </h2>
            <br>
            <table class="table table-hover">
                <thead class="shadow-lg text-center">
                    <tr>
                        <th style="max-width: 150px;">ID</th>
                        <th style="max-width: 200px;">Description</th> <!-- Limitar ancho de la celda -->
                        <th>Scale</th>
                        <th>State</th>
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
                    <td class="text-center">${preguntas.Scale}</td>
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
        preguntaslist.innerHTML = '<h1 class="text-center">No hay preguntas disponibles</h1>';
    }
};
