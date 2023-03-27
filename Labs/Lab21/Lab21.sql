/* ------------------------------------------------------
Autores: José Emiliano Riosmena Castañón, Ian Joab Padrón Corona
Matriculas: A01704245, A01708940

Base de datos:
Materiales(Clave, Descripción, Costo, PorcentajeImpuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad) 
------------------------------------------------------ */

-- 1. La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.
SELECT SUM(E.Cantidad) AS Total, SUM(E.Cantidad * M.Costo * (1 + M.PorcentajeImpuesto / 100)) AS Importe
FROM Entregan E, Materiales M
WHERE E.Clave = M.Clave
AND E.Fecha = 1997

-- 2. Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe 
-- total de las entregas realizadas.
SELECT P.RazonSocial, COUNT(E.RFC) AS Entregas, SUM(E.Cantidad * M.Costo * (1 + M.PorcentajeImpuesto/100)) AS Importe
FROM Proveedores P, Entregan E, Materiales M
WHERE P.RFC = E.RFC
AND E.Clave = M.Clave
GROUP BY P.RFC

-- 3. Por cada material obtener la clave y descripción del material, la cantidad total entregada,
-- la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas 
-- de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.
SELECT M.Clave, M.Descripcion, SUM(E.Cantidad) AS Entregas, MIN(E.Cantidad) AS Mínimo, MAX(E.Cantidad) AS Máximo, SUM(E.Cantidad * M.Costo * (1 + M.PorcentajeImpuesto/100)) AS Importe
FROM Materiales M, Entregan E
WHERE M.Clave = E.Clave
GROUP BY M.Clave
HAVING AVG(E.Cantidad) > 400
-- 4. Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material 
-- entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para 
-- los que la cantidad promedio sea menor a 500.
SELECT P.RazonSocial, M.Clave, M.Descripcion, AVG(E.Cantidad) AS Promedio
FROM Proveedores P, Materiales M, Entregan E
WHERE P.RFC = E.RFC
AND E.Clave = M.Clave
GROUP BY P.RFC, M.Clave
HAVING AVG(E.Cantidad) >= 500

-- 5. Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos 
-- grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y 
-- aquellos para los que la cantidad promedio entregada sea mayor a 450.
SELECT P.RazonSocial, M.Clave, M.Descripcion, AVG(E.Cantidad) AS Promedio
FROM Proveedores P, Materiales M, Entregan E
WHERE P.RFC = E.RFC
AND M.Clave = E.Clave
GROUP BY P.RFC, M.Clave
HAVING AVG(E.Cantidad) < 370 OR AVG(E.Cantidad) > 450
ORDER BY AVG(E.Cantidad) DESC, P.RazonSocial ASC

-- 6. Clave y descripción de los materiales que nunca han sido entregados. 
SELECT Clave, Descripcion
FROM Materiales
WHERE Clave NOT IN (SELECT Clave
                    FROM Entregan)

-- 7. Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' 
-- como al proyecto 'Querétaro Limpio'.
SELECT P.RazonSocial
FROM Proveedores P, Entregan E
WHERE P.RFC = E.RFC
AND E.Numero IN (SELECT Numero
                 FROM Proyectos
                 WHERE Denominacion = 'Vamos México') 
AND Entregan.Numero IN (SELECT Numero
                        FROM Proyectos
                        WHERE Denominacion = 'Querétaro Limpio')

-- 8. Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.
SELECT Descripcion
FROM Materiales
WHERE Clave NOT IN (SELECT Clave
                    FROM Entregan
                    WHERE Numero NOT IN(SELECT Numero
                                        FROM Proyectos
                                        WHERE Denominacion = 'CIT Yucatán'))

-- 9. Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad 
-- entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.
SELECT P.RazonSocial, AVG(E.Cantidad) AS Promedio
FROM Proveedores P, Entregan E
WHERE P.RFC = E.RFC
AND P.RFC != 'VAGO780901'
GROUP BY P.RazonSocial
HAVING AVG(E.Cantidad) > (SELECT AVG(Cantidad)
                          FROM Entregan
                          WHERE RFC = 'VAGO780901')

-- 10. RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y 
-- cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas 
-- en el 2001. 
SELECT RFC, RazonSocial
FROM Proveedores
WHERE RFC IN (SELECT E.RFC
              FROM Entregan E, Proyectos P
              WHERE E.Numero = P.Numero
              WHERE P.Denominacion = 'Infonavit Durango' 
              AND E.Fecha = 2000
              GROUP BY E.RFC
              HAVING SUM(E.Cantidad) > (SELECT SUM(E.Cantidad)
                                      FROM Entregan E, Proyectos P, Proveedores Pr
                                      WHERE E.Numero = P.Numero
                                      WHERE P.Denominacion = 'Infonavit Durango' 
                                      AND E.Fecha = 2001
                                      AND E.RFC = Pr.RFC))