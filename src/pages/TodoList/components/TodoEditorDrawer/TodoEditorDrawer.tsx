import { Drawer, DrawerContent, DrawerDescription, DrawerTitle } from "@/components/ui/drawer";
import React from "react";
export interface TodoEditorDrawerProps {
  open?: Boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const TodoEditorDrawer: React.FC<TodoEditorDrawerProps> = ({ className, style, open }) => {
  return (
    <Drawer shouldScaleBackground direction="right" open={Boolean(open)}>
      {/* <DrawerOverlay className="fixed inset-0 bg-black/40"></DrawerOverlay> */}
      <DrawerContent
        className="right-2 top-2 bottom-2 fixed outline-none w-[310px] flex mt-0 overflow-hidden left-auto rounded-r-[0px] rounded-l-[10px]"
        // The gap between the edge of the screen and the drawer is 8px in this case.
        style={{ "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties}>
        <div className="bg-zinc-50 h-full w-full grow p-5 flex flex-col rounded-[16px]">
          <div className="max-w-md mx-auto">
            <DrawerTitle className="font-medium mb-2 text-zinc-900">It supports all directions.</DrawerTitle>
            <DrawerDescription className="text-zinc-600 mb-2">
              This one specifically is not touching the edge of the screen, but that&apos;s not required for a side drawer.
            </DrawerDescription>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
