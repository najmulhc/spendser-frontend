"use client";
import { useTheme } from "next-themes";
import React from "react";
import Select from "react-select";

const SelectResource = ({
  setResource,
  type,
}: {
  setResource: (e: any) => void;
  type: string[];
}) => {
  const { theme } = useTheme();
  return (
    <Select
      onChange={(e: any) => {
        setResource(e.value);
      }}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          flex: 1,
          height: "2.5rem",
          width: "100%",
          borderRadius: "0.375rem",
          border: `1px solid hsl(var(--border))`,
          backgroundColor: theme === "dark" ? "#09090b" : "#fff",
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",
          paddingTop: "0rem",
          paddingBottom: "0.5rem",
          fontSize: "0.875rem",
          outline: "2px solid transparent",
          outlineOffset: "2px",
          color: "#ffffff",
          "::placeholder": {
            color: "#fffff8f",
          },
          "::-ms-value": {
            color: "#fffff8f",
          },
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
          ...styles,
          display: "flex",
          alignItems: "center",
          height: "auto",
          width: "100%",
          margin: "0",
          border: "1px solid #e2e8f030",
          backgroundColor: theme === "dark" ? "#09090b" : "#fff",
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          fontSize: "0.875rem",
          outline: "2px solid transparent",
          outlineOffset: "2px",
          ":hover": {
            backgroundColor: theme === "dark" ? "#27272a" : "blue",
            cursor: "pointer",
          },
        }),
      }}
      options={type.map((item: any) => {
        return {
          value: item,
          label: item,
        };
      })}
    />
  );
};

export default SelectResource;
