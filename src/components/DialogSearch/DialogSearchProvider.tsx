import React, { useMemo, useState } from "react";
import DialogSearchContext from "./DialogSearchContext";
import DialogSearch from ".";

export const DialogSearchProvider: React.FunctionComponent = (props) => {
  const [open, setOpen] = useState(false);

  const actions = useMemo(
    () => ({
      show: () => setOpen(true),
      hide: () => setOpen(false),
    }),
    []
  );
  return (
    <DialogSearchContext.Provider value={actions}>
      {props.children}
      <DialogSearch open={open} />
    </DialogSearchContext.Provider>
  );
};
