import consul

# Register service to Consul
def register_service():
    client = consul.Consul()
    client.agent.service.register(
        'my-service', 
        service_id='fastapi1',
        address='127.0.0.1',
        port=8001
    )
