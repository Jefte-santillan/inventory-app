import QRCode from "qrcode";
import { ref, watch } from "vue";
import { Notify } from "quasar";
import axios from "axios";

export default function useOperationAdd() {
  const qrLink = ref("http://inventory-app.local/operation/");
  const url = "http://laravel-api-inventary.local/api/operations";
  const loading = ref(false);
  const qrValue = ref();
  const qrImage = ref("");
  const product = ref();
  const identity = ref();
  const form = ref({
    product_id: null,
    number_serie: null,
    created_identity_id: null,
  });

  const generateQR = async (id) => {
    try {
      qrValue.value = qrLink.value + id;
      qrImage.value = await QRCode.toDataURL(qrValue.value, {
        width: 300,
        margin: 2,
      });
    } catch (err) {
      console.error("Error generando QR:", err);
    }
  };

  const printQR = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Imprimir Código QR</title>
        </head>
        <body>
          <div style="text-align: center;">
            <h2>Mi Código QR</h2>
            <img src="${qrImage.value}" alt="Código QR" />
          </div>
          <script>
            window.onload = function() {
              window.print()
              window.onafterprint = function() {
                window.close()
              }
            }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  async function store() {
    loading.value = true;
    await axios
      .post(url, form.value)
      .then(onSuccess)
      .catch(onCath)
      .finally(() => {
        loading.value = false;
      });
  }

  function onSuccess(response) {
    loading.value = false;
    Notify.create({
      type: "positive",
      message: "Se guardo de manera correcta",
      icon: "done",
    });
    form.value.name = null;

    generateQR(response.data.data.id);
  }

  function onCath(error) {
    loading.value = false;
    Notify.create({
      type: "negative",
      message: "Error al guardar",
      icon: "error",
    });
  }

  watch(identity, (newValue) => {
    form.value.created_identity_id = newValue.id;
  });

  watch(product, (newValue) => {
    form.value.product_id = newValue.id;
  });

  return {
    store,
    generateQR,
    printQR,
    qrValue,
    qrImage,
    product,
    identity,
    form,
    loading,
  };
}
