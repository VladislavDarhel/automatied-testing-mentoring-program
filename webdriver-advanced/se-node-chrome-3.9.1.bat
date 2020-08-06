set SERVER_VERSION=3.9.1
set HUB_PORT=5557
set REGISTER_IP=localhost:4444
set CHROME_DRIVER=.\webdriver\chromedriver.exe
java -Dvebdriver.chrome.drive=%CHROME_DRIVER% -jar selenium-server-standalone-%SERVER_VERSION%.jar -role node -hub http://%REGISTER_IP%/grid/register/ -browser "browserName=chrome,version=64,maxinstance=5,platform=WINDOWS" -port %HUB_PORT%
pause