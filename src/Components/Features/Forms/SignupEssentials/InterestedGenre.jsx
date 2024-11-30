import React from "react";
import {CheckboxGroup} from "@nextui-org/react";
import CustomCheckbox from "./CustomCheckbox";

export default function InterestedGenre() {
  const [groupSelected, setGroupSelected] = React.useState([]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <CheckboxGroup
        className="gap-1"
        label="Select multiples"
        orientation="horizontal"
        value={groupSelected}
        onChange={setGroupSelected}
      >
        <CustomCheckbox value="Fictional">Fictional</CustomCheckbox>
        <CustomCheckbox value="Finance">Finance</CustomCheckbox>
        <CustomCheckbox value="Self-Help">Self-Help</CustomCheckbox>
        <CustomCheckbox value="Skill-Based">Skill-Based</CustomCheckbox>
        <CustomCheckbox value="Biography">Biography</CustomCheckbox>
        <CustomCheckbox value="Comics">Comics</CustomCheckbox>
      </CheckboxGroup>
      <p className="mt-4 ml-1 text-default-500">
        Selected: {groupSelected.join(", ")}
      </p>
    </div>
  );
}
