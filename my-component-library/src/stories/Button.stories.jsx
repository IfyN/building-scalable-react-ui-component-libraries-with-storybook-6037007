import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ['autodocs']
};

export const Primary = {
  args: {
    label: "Primary Button",
    variant: "primary",
    size: "md",
  },
};

export const Secondary = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
    size: "md",
  },
};

export const Outline = {
  args: {
    label: "Outline Button",
    variant: "outline",
    size: "md",
  },
};

export const Large = {
  args: {
    label: "Large Button",
    variant: "primary",
    size: "lg",
  },
};

export const Small = {
  args: {
    label: "Small Button",
    variant: "primary",
    size: "sm",
  },
};
