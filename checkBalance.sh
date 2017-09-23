REMOTE_IP=139.59.120.226

echo "Loading buyer's balance..."
curl http://localhost:3000/accounts/0x2b5ad5c4795c026514f8317c7a215e218dccd6cf/balance
echo ""

echo "Loading merchant's balance..."
curl http://localhost:3000/accounts/0x7e5f4552091a69125d5dfcb7b8c2659029395bdf/balance
echo ""
