import { Chip, Table } from "@heroui/react";

const UserTable = ({ usersPots }) => {
  const {} = usersPots;
  console.log(usersPots);
  return (
    <Table>
      <Table.ResizableContainer>
        <Table.Content
          aria-label="Table with resizable columns"
          className="min-w-[700px]"
        >
          <Table.Header>
            <Table.Column
              isRowHeader
              defaultWidth="1fr"
              id="name"
              minWidth={160}
            >
              Title
              <Table.ColumnResizer />
            </Table.Column>
            <Table.Column defaultWidth="1fr" id="role" minWidth={220}>
              Tag
              <Table.ColumnResizer />
            </Table.Column>
            <Table.Column defaultWidth="1fr" id="status" minWidth={100}>
              Category
              <Table.ColumnResizer />
            </Table.Column>
            <Table.Column defaultWidth="1fr" id="email" minWidth={200}>
              Posted Date
            </Table.Column>
          </Table.Header>
          <Table.Body>
            {usersPots.map((userIdea) => (
              <Table.Row key={userIdea._id}>
                <Table.Cell>{userIdea.title}</Table.Cell>
                <Table.Cell>{userIdea.tag}</Table.Cell>
                <Table.Cell>
                  <Chip
                    color={`${userIdea.category == "Tech" && "success"} ${userIdea.category == "AI" && "accent"} `}
                    className={`${userIdea.category == "Health" && "bg-purple-100 text-purple-400 border border-purple-400"}`}
                    size="sm"
                    variant="soft"
                  >
                    {userIdea.category}
                  </Chip>
                </Table.Cell>
                <Table.Cell>
                  {new Date(userIdea.postedDate).toLocaleDateString("en-DB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ResizableContainer>
    </Table>
  );
};

export default UserTable;
