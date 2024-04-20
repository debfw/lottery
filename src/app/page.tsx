"use client";
import { CountdownTimer } from "@/components/CountdownTimer";
import UserList from "@/components/UserList";
import { Card} from "@mantine/core";


export default function Home() {
  return (
    <Card shadow="sm" padding="xl">
      <Card.Section className="m-10">
        <CountdownTimer />
      </Card.Section>

      <Card.Section className="m-10">
        <UserList />
      </Card.Section>
    </Card>
  );
}
