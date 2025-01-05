const preguntaslist = document.querySelector('.preguntas7');

export const setupPreguntas7 = (data) => {
    if (!preguntaslist) {
        console.error("El elemento '.preguntas7' no existe en el DOM.");
        return;
    }

    if (data.length) {
        let html = `
            <br>
                <h2 class="text-center">TABLE II: METRICS FOR THE CSF: STAKEHOLDERS</h2>
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
                            <option value="concluido" ${preguntas.Answer ? "selected" : ""}>Does not exist</option>
                            <option value="no-concluido" ${!preguntas.Answer ? "selected" : ""}>Exists</option>
                        </select>
                    </td>
                </tr>
            `;
        });

        html += `

                    <tr>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">INS3</td>
                        <td style="max-width: 200px; word-wrap: break-word; white-space: normal;">Alignment between program procedures and the institutional QMS</td>
                        <td class="text-center">0 - 3</td>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">
                            <select class="form-select automation-select" data-id="">
                                <option value="not-automated" "not-automated" ? "selected" : ""}>Not aligned</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Not very aligned</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Moderately aligned</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Significantly aligned</option>
                                
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">INS4</td>
                        <td style="max-width: 200px; word-wrap: break-word; white-space: normal;">Availability of staff trained in planning and monitoring of the IP</td>
                        <td class="text-center">0 - 3</td>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">
                            <select class="form-select automation-select" data-id="">
                                <option value="not-automated" "not-automated" ? "selected" : ""}>Not available</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Not very available</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Moderately available</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Fully available </option>
                                
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">INS5</td>
                        <td style="max-width: 200px; word-wrap: break-word; white-space: normal;">Level of staff rotation involved in planning and monitoring of the IP</td>
                        <td class="text-center">0 - 3</td>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">
                            <select class="form-select automation-select" data-id="">
                                <option value="not-automated" "not-automated" ? "selected" : ""}>Very high rotation</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>High rotation</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Moderately rotation</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Low rotation</option>
                                
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">INS6</td>
                        <td style="max-width: 200px; word-wrap: break-word; white-space: normal;">Leadership level to articulate actions and decision making between the units involved for the planning and monitoring of the IP</td>
                        <td class="text-center">0 - 3</td>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">
                            <select class="form-select automation-select" data-id="">
                                <option value="not-automated" "not-automated" ? "selected" : ""}>No leadership </option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Inadequate leadership</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Acceptable leadership </option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Ideal leadership</option>
                                
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">INS7</td>
                        <td style="max-width: 200px; word-wrap: break-word; white-space: normal;">Existence of incentives (motivation and recognition of merit) for work teams that plan and monitor the IP</td>
                        <td class="text-center">0 - 1</td>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">
                            <select class="form-select automation-select" data-id="">
                                <option value="not-automated" "not-automated" ? "selected" : ""}>Does not exist</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Exists</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">INS8</td>
                        <td style="max-width: 200px; word-wrap: break-word; white-space: normal;">Level of flexibility in the adaptation of regulations and regulations related to the IP</td>
                        <td class="text-center">0 - 3</td>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">
                            <select class="form-select automation-select" data-id="">
                                <option value="not-automated" "not-automated" ? "selected" : ""}>Unflexible </option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Not very flexible</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Moderately flexible </option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Sufficiently flexible</option>
                                
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">INS9</td>
                        <td style="max-width: 200px; word-wrap: break-word; white-space: normal;">Nivel de flexibilidad en la gestión administrativa institucional en caso de cambios imprevistos</td>
                        <td class="text-center">0 - 3</td>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">
                            <select class="form-select automation-select" data-id="">
                                <option value="not-automated" "not-automated" ? "selected" : ""}>Unflexible </option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Not very flexible</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Moderately flexible </option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Sufficiently flexible</option>
                                
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
