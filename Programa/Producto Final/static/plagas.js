document.querySelector("#plagas").addEventListener("change", function (ev) {
  let html = "";
  const plaga = ev.target.value;

  if (plaga === "1") {
    html = `
        <div class="mb-3">
            <label for="tmpMin" class="form-label"
            >Temperatura mínima(C°)</label
            >
            <input
            type="text"
            class="form-control"
            id="tmpMin"
            />
        </div>
        <div class="mb-3">
            <label for="tmpMax" class="form-label"
            >Temperatura máxima(C°)</label
            >
            <input
            type="text"
            class="form-control"
            id="tmpMax"
            />
        </div>
        <div class="mb-3">
            <label for="rsProm" class="form-label"
            >Radiación solar promedio</label
            >
            <input
            type="text"
            class="form-control"
            id="rsProm"
            />
        </div>    
        <div class="mb-3">
            <label for="tmpProm" class="form-label"
            >Temperatura promedio</label
            >
            <input
            type="text"
            class="form-control"
            id="tmpProm"
            />
        </div>  
    `;
  } else if (plaga === "2") {
    html = `
    <div class="mb-3">
      <label for="TMP_PROM" class="form-label">
        Temperatura promedio (C°)
      </label>
      <input
        type="number"
        step="0.01"
        class="form-control"
        id="TMP_PROM"
        name="TMP_PROM"
      />
    </div>  
      <div class="mb-3">
      <label for="HM_PROM" class="form-label">
        Humedad promedio (C°)
      </label>
      <input
        type="number"
        step="0.01"
        class="form-control"
        id="HM_PROM"
        name="HM_PROM"
      />
    </div>
    `;
  } else if (plaga === "3") {
    html = `
    <div class="mb-3">
      <label for="TMP_PROM" class="form-label">
        Temperatura promedio (C°)
      </label>
      <input
        type="number"
        step="0.01"
        class="form-control"
        id="TMP_PROM"
        name="TMP_PROM"
      />     
    </div>  
    <div class="mb-3">
      <label for="HM_PROM" class="form-label">
      Humedad Promedio (C°)
      </label>
      <input
        type="number"
        step="0.01"
        class="form-control"
        id="HM_PROM"
        name="HM_PROM"
      />
    </div>
    `;
  } else if (plaga === "4") {
    html = `  
    <div class="mb-3">
      <label for="HM_PROM" class="form-label">
        Humedad promedio (C°)
      </label>
      <input
        type="number"
        step="0.01"
        class="form-control"
        id="HM_PROM"
        name="HM_PROM"
      />     
    </div> 
    <div class="mb-3">
      <label for="TMP_PROM" class="form-label">
        Temperatura promedio (C°)
      </label>
      <input
        type="number"
        step="0.01"
        class="form-control"
        id="TMP_PROM"
        name="TMP_PROM"
      />     
    </div> 
    `;
  } else if (plaga === "5") {
    html = `
      <div class="mb-3">
        <label for="TMP_PROM" class="form-label">
          Temperatura promedio (C°)
        </label>
        <input
          type="number"
          step="0.01"
          class="form-control"
          id="TMP_PROM"
          name="TMP_PROM"
        />     
      </div> 
    `;
  }

  html =
    html +
    `
    <div class="mb-6">
      <button type="submit" class="btn btn-primary">Predecir</button>
    </div>
  
  `;

  document.getElementById("form").innerHTML = html;
});
