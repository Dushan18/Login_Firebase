const preguntaslist = document.querySelector('.preguntas4');

export const setupPreguntas4 = (data) => {
    if (!preguntaslist) {
        console.error("El elemento '.preguntas4' no existe en el DOM.");
        return;
    }

    if (data.length) {
        let html = `
            <br>
            <h2 class="text-center">TABLE VI METRICS FOR THE CSF : INFORMATION</h2>
            <br>
            <table class="table table-hover">
                <thead class="shadow-lg text-center">
                    <tr>
                        <th style="max-width: 150px;">ID</th>
                        <th style="max-width: 200px;">Description</th>
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
                            <option value="not-available" ${preguntas.Answer === "not-available" ? "selected" : ""}>Not available</option>
                            <option value="not-very-available" ${preguntas.Answer === "not-very-available" ? "selected" : ""}>Not very available</option>
                            <option value="moderately-available" ${preguntas.Answer === "moderately-available" ? "selected" : ""}>Moderately available</option>
                            <option value="fully-available" ${preguntas.Answer === "fully-available" ? "selected" : ""}>Fully available</option>
                        </select>
                    </td>
                </tr>

                
            `;
        });

        // Cerrar tabla
        html += `
                    <!-- Segunda fila de datos relacionados (ID8, Description8, Scale8) -->
                    <tr>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">IN8</td>
                        <td style="max-width: 200px; word-wrap: break-word; white-space: normal;">Level of automation of the plan formulation process</td>
                        <td class="text-center">0 - 3</td>
                        <td style="max-width: 150px; word-wrap: break-word; white-space: normal;">
                            <select class="form-select automation-select" data-id="">
                                <option value="not-automated" "not-automated" ? "selected" : ""}>Not automated</option>
                                <option value="not-very-automated" "not-very-automated" ? "selected" : ""}>Not very automated</option>
                                <option value="moderately-automated""moderately-automated" ? "selected" : ""}>Moderately automated</option>
                                <option value="highly-automated" "highly-automated" ? "selected" : ""}>Highly automated</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        `;

        preguntaslist.innerHTML = html;
    } else {
        preguntaslist.innerHTML = '<h1 class="text-center">No hay preguntas disponibles</h1>';
    }
};
