Supabase Table Schema




1) Leads Table:
    id: UUID (Primary Key, auto-generated)
    creation_date: TIMESTAMP (default to now())
    name: TEXT
    email: TEXT
    phone_no: TEXT
    status: TEXT
    channel: TEXT
    source: TEXT

2) quote_requests.
    id: UUID (Primary Key, auto-generated)
    creation_date: TIMESTAMP (default to now())
    email: TEXT (Foreign Key to leads.email)
    source: TEXT
    destination: TEXT
    shipment_date: TEXT
    weight: TEXT
    dimensions: TEXT
    goods_details: TEXT
    special_instructions: TEXT



