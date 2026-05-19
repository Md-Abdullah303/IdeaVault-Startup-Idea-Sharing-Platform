"use client";
import React from "react";
import {
  EllipsisVertical,
  Pencil,
  SquarePlus,
  TrashBin,
} from "@gravity-ui/icons";
import {
  Button,
  Description,
  Dropdown,
  Header,
  Kbd,
  Label,
  Separator,
} from "@heroui/react";
import Link from "next/link";

const IdeasPostEdit = ({ _id }) => {
  return (
    <div>
      <Dropdown>
        <Button isIconOnly aria-label="Menu" variant="secondary">
          <EllipsisVertical className="outline-none" />
        </Button>
        <Dropdown.Popover>
          <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
            <Dropdown.Section>
              <Header>Actions</Header>
              <Dropdown.Item id="new-file" textValue="New file">
                <Link href={`/ideas/${_id}`}>
                  <div className="flex flex-col">
                    <Label>See Details</Label>
                  </div>
                </Link>
              </Dropdown.Item>
            </Dropdown.Section>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
};

export default IdeasPostEdit;
