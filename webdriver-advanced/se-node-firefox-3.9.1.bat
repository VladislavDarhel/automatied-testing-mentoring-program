set SERVER_VERSION=3.9.1
set HUB_PORT=5558
set REGISTER_IP=localhost:4444
set GECKO_DRIVER=.\webdriver\geckodriver.exe
java -Dvebdriver.gecko.drive=%GECKO_DRIVER% -jar selenium-server-standalone-%SERVER_VERSION%.jar -role node -hub http://%REGISTER_IP%/grid/register/ -browser "browserName=firefox,version=64,maxinstance=5,platform=WINDOWS" -port %HUB_PORT%
pause