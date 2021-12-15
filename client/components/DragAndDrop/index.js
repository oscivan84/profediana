import { useEffect, useMemo } from "react";

import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";
import thumbnailGenerator from "@uppy/thumbnail-generator";
import Webcam from "@uppy/webcam";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

const DragAndDrop = ({ onUpload = () => {}, title = '' }) => {
  const uppy = useMemo(() => {
    return new Uppy()
  }, []);
  const images = useMemo(() => new Set(), []);

  useEffect(() => {
    uppy.use(thumbnailGenerator);

    return () => uppy.close();
  }, []);

  useEffect(() => {
    uppy.on("thumbnail:generated", (file, preview) => {
      images.add(file.data);
    });

    return () => uppy.close();
  }, []);

  useEffect(() => {
    uppy.on("upload", () => {
      onUpload([...images]);
      images.clear();
      uppy.reset();
      console.log("CLEAR", images);
    });
  }, []);

  return (
    <div className="">
      {title ? <h4 className="text-gray-200 text-center mb-10">{title}</h4> : null}
      <Dashboard
        width="100%"
        height="400px"
        uppy={uppy}
        plugins={["Webcam", ""]}
        locale={{
          strings: {
            addMore: "Añadir",
            cancel: "Cancelar",
            xFilesSelected: {
              0: "%{smart_count} archivo seleccionado",
              1: "%{smart_count} archivos seleccionados",
            },
            uploadXFiles: {
              0: "Subiendo %{smart_count} archivo",
              1: "Subiendo %{smart_count} archivos",
            },
            browseFiles: "seleccionalas",
            dropPasteFiles: "Deja caer tus imagenes o %{browseFiles}",
            dropPasteFolders: "Deja caer tus imagenes o %{browseFolders}",
          },
        }}
      />
    </div>
  );
};

export default DragAndDrop;
