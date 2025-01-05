const preguntaslist = document.querySelector('.preguntas5');

export const setupPreguntas5 = (data) => {
    if (!preguntaslist) {
        console.error("El elemento '.preguntas5' no existe en el DOM.");
        return;
    }

    if (data.length) {
        let html = `
            <br>
                <h2 class="text-center">TABLE V METRICS FOR THE CSF : IMPROVEMENT ACTIONS </h2>
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
                                <option value="concluido" ${preguntas.Answer ? "selected" : ""}>Established</option>
                                <option value="no-concluido" ${!preguntas.Answer ? "selected" : ""}>No Established</option>
                            </select>
                        </td>
                    </tr>
            `;
            
        });

        html += `

                    <tr>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">IA6</td>
                        <td style="max-width: 200px; word-wrap: break-word; white-space: normal;">Implemented repository for the registration of progress of the IA</td>
                        <td class="text-center">0 - 1</td>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">
                            <select class="form-select automation-select" data-id="">
                                <option value="not-automated" "not-automated" ? "selected" : ""}>Does not exist</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Exist</option>
                                
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">IA7</td>
                        <td style="max-width: 200px; word-wrap: break-word; white-space: normal;">Coherence of the IA with instituional purposes</td>
                        <td class="text-center">0 - 3</td>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">
                            <select class="form-select automation-select" data-id="">
                                <option value="not-automated" "not-automated" ? "selected" : ""}>Not coherent</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Not very coherent</option>
                                <option value="moderately-automated""moderately-automated" ? "selected" : ""}>Moderately automated</option>
                                <option value="highly-automated" "highly-automated" ? "selected" : ""}>Significantly coherent</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">IA8</td>
                        <td style="max-width: 200px; word-wrap: break-word; white-space: normal;">Level of automation of the plan formulation process</td>
                        <td class="text-center">0 - 3</td>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">
                            <select class="form-select automation-select" data-id="">
                                <option value="not-automated" "not-automated" ? "selected" : ""}>Not coherent</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Not very coherent</option>
                                <option value="moderately-automated""moderately-automated" ? "selected" : ""}>Moderately automated</option>
                                <option value="highly-automated" "highly-automated" ? "selected" : ""}>Significantly coherent</option>
                            </select>
                        </td>
                    </tr>
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
