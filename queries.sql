-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select P.ProductName, C.CategoryName
from Product as P
join Category as C on P.CategoryId = C.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select O.Id, S.CompanyName
from [Order] as O
join Shipper as S on O.ShipVia = S.Id
where O.OrderDate < '2012-08-09';
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
-- select p.name, od.quantity
select P.ProductName, OD.Quantity
from [OrderDetail] as OD
join [Order] as O on OD.OrderId = O.Id
join Product as P on OD.ProductId = P.Id
Where O.Id = 10251
Order By P.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select [O].Id, C.CompanyName, E.LastName
from [Order] as O
join Customer as C on O.CustomerId = C.Id
join Employee as E on O.EmployeeId = E.Id