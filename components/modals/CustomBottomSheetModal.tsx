import React, { forwardRef, useCallback, useMemo, useRef } from "react";
import { BottomSheetModal, BottomSheetBackdrop } from "@gorhom/bottom-sheet";

// Type Props = {
//   points: Array,
// }

const CustomBottomSheetModal = forwardRef(
  ({ children, handleClose, ...others }: any, ref) => {
    const points = false;
    // const bottomSheetRef = useRef<null>(null);
    const snapPoints = useMemo(
      () => points || ["25%", "50%", "70%", "90%"],
      []
    );
    // Backdrop Component
    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...props}
        />
      ),
      []
    );
    console.log(others);
    return (
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: "#1d0f4e" }}
        handleIndicatorStyle={{ backgroundColor: "#fff" }}
        // containerStyle={{ margin: 14, backgroundColor: "#f20" }}
        onClose={handleClose}
        {...others}
        //
      >
        {/* <BottomSheetTextInput /> */}
        {children}
      </BottomSheetModal>
    );
  }
);

export default CustomBottomSheetModal;
