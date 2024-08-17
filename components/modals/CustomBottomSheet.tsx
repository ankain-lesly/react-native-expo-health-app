import React, { useCallback, useMemo } from "react";
import Bottomsheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

// Type Props = {
//   points: Array,
// }

export default function CustomBottomSheet({
  children,
  handleClose,
  ...others
}: any) {
  const points = false;
  // const bottomSheetRef = useRef<null>(null);
  const snapPoints = useMemo(() => points || ["25%", "50%", "70%", "90%"], []);
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

  return (
    <Bottomsheet
      // ref={bottomSheetRef}
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
    </Bottomsheet>
  );
}
