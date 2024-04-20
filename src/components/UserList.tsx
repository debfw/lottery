"use client";
import { memo } from "react";
import { ScrollArea, List } from "@mantine/core";
import { UserCircle } from "tabler-icons-react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
function UserList() {
  const users = useSelector((state: RootState) => state.users.users);
  const usersList = users.map((person) => (
    <List data-list-item key={person.id} bg={"white"} className="text-3xl">
      <List.Item
        styles={{
          itemWrapper: { display: "flex", background: "#F8F8F8", padding: 20 },
        }}
        icon={<UserCircle size={38} strokeWidth={1.5} color={"#B0B0B0"} />}
      >
        {person.name}
      </List.Item>
    </List>
  ));

  return (
    <>
      <ScrollArea
        type="always"
        mt="md"
        offsetScrollbars
        scrollbarSize={12}
        scrollHideDelay={2500}
        styles={{
          viewport: { height: 500, width: 500 },
        }}
      >
        {usersList}
      </ScrollArea>
    </>
  );
}

export default memo(UserList);
