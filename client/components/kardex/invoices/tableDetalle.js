import React, { useState, useMemo } from "react";
import { Table, CardFooter, Row, Col, Input, Button } from "reactstrap";
import { useSelector } from "react-redux";
import Item from "./item";
import Swal from "sweetalert2";
import InvoiceRequest from "../../../request/kardex/invoiceRequest";
import DetailRequest from "../../../request/kardex/detailRequest";
import { clearDetails } from "../../../redux/thunks/kardex/invoiceThunk";
import { useDispatch } from "react-redux";
import { DateTime } from "luxon";
import { format } from "currency-formatter";
import Link from "next/link";

const TableDetalle = () => {
  const [selectPaymentMethod, setSelectPaymenytMethod] = useState(false);

  const invoiceRequest = new InvoiceRequest();
  const detailRequest = new DetailRequest();

  const dispatch = useDispatch();

  const { mode } = useSelector((state) => state.screen);
  const { details, receiver, detailTotal } = useSelector(
    (state) => state.invoice
  );

  const [description, setDescription] = useState();
  const [loading, setLoading] = useState(false);
  const [currentId, setCurrentId] = useState(undefined);

  const canSave = useMemo(() => {
    return details?.length && receiver?.receiverId;
  }, [details.length, receiver?.receiverId]);

  const dialogConfirm = async () => {
    return await Swal.fire({
      title: "¿Estás seguro en guardar los datos?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Guardar",
    });
  };

  const handleSaveDetalle = async (id) => {
    const datos = [];
    await details?.map((det) => {
      datos.push({
        invoiceId: id,
        detailableType: det.detailableType,
        detailableId: det.detailableId,
        price: det.displayPrice,
        amount: det.displayAmount,
      });
    });
    return await detailRequest.storeMany(datos).then(() => {
      Swal.fire({
        icon: "success",
        text: "Los datos se guardaron correctamente!",
      });
      setLoading(false);
      setCurrentId(undefined);
      setDescription();
      dispatch(clearDetails());
    });
  };

  const handleSave = async () => {
    const answer = await dialogConfirm();
    if (!answer) return;
    setLoading(true);
    if (currentId) return handleSaveDetalle(currentId);
    // primera vez
    await invoiceRequest
      .store({
        transmitterId: 1,
        transmitterType: "Campus",
        receiverType: receiver.receiverType,
        receiverId: receiver.receiverId,
        description,
        date: DateTime.now().toFormat("yyyy-MM-dd"),
      })
      .then(async ({ data }) => {
        setCurrentId(data.id);
        await handleSaveDetalle(data.id);
      })
      .catch(() => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          text: "No se pudó generar la orden",
        });
      });
  };

  return (
    <>
      <div className="table-responsive">
        <Table striped>
          <thead>
            <tr>
              <th className="text-left" width="300px">
                Detalle de Producto
              </th>
              <th className="text-center" width="50px">
                Precio
              </th>
              <th className="text-center" width="50px">
                Cantidad
              </th>
              <th className="text-center" width="50px">
                Total
              </th>
              <th className="text-center" width="40px">
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody>
            {details?.length ? (
              details?.map((det) => (
                <Item
                  key={`item-detalle-${det.objectId}`}
                  id={det.objectId}
                  name={det.displayName}
                  price={det.displayPrice}
                  amount={det.displayAmount}
                />
              ))
            ) : (
              <tr>
                <th className="text-center" colSpan={5}>
                  Aún no hay productos seleccionados
                </th>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      <CardFooter style={{ borderTop: "2px solid #ecf3fa" }}>
        <Row>
          <Col md="8">
            <h6>Notas</h6>
            <Input
              type="textarea"
              name="description"
              value={description || ""}
              onChange={({ target }) => setDescription(target.value)}
              style={{ minHeight: "77%" }}
            />
          </Col>
          <Col md="4">
            <h6 className={mode == "xs" ? "mt-3" : ""}>Detalles de Pago</h6>
            <div className="flex justify-between mb-3">
              <span className="text-muted mt-2">Total: </span>
              <b className="font-medium mt-2">
                {format(detailTotal, { code: "COP" })}
              </b>
            </div>
            <div className="flex mt-4 justify-end">
              {selectPaymentMethod ? (
                <Button
                  block
                  color="primary"
                  size="lg"
                  disabled={!canSave || loading}
                  onClick={handleSave}
                >
                  {loading ? "Guardando..." : "Terminar"}
                </Button>
              ) : (
                <Link href="/kardex/pymentMethod">
                  Métodos de Pago
                </Link>
              )}
            </div>
          </Col>
        </Row>
      </CardFooter>
    </>
  );
};

export default TableDetalle;
