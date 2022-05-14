import * as React from "react";
import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

type GithubButtonProps = Omit<IconButtonProps, "aria-label">;

export const GithubButton: React.FC<GithubButtonProps> = (props) => {
  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={() =>
        window.open("https://github.com/AlexMeuer/simply-the-quest", "_blank")
      }
      icon={<AiFillGithub />}
      aria-label={`Open GitHub repository`}
      {...props}
    />
  );
};
