// Initialization connect to backend websocket (socket.io)

function Home() {
  return (
    <>
      <Row className="mt-4">
        <Col>
          <h6>{typing && "seseorang sedang mengetik...."}</h6>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          {messages?.length > 0 &&
            messages?.map((message) => (
              <MessageItem data={message} key={message.id} />
            ))}
        </Col>

        <AddMessage socket={socket} />
      </Row>
    </>
  );
}

export default Home;
