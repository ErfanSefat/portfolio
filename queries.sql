CREATE TABLE PortProjects(
    PrID INT PRIMARY KEY,
    PrName VARCHAR(30),
    PrDesc VARCHAR(60),
    PrDate DATE,
    PrType VARCHAR(20),
    PrImgUrl VARCHAR(100)
);
INSERT INTO PortProjects(PrID,PrName,PrDesc,PrDate,PrType,PrImgUrl) VALUES 
(1, 'Aftabe Honar Biology', 'Educational Books Cover Design', '2024-05-01', 'Design', '/frame1.png')
