import { Request, Response } from 'express';

export class EnvironmentController {
  // GET 
  public static getAll = (req: Request, res: Response): void => {
    // TODO: Listar todos los ambientes/laboratorios
    res.status(501).json({
      success: false,
      message: ' El listado de ambientes todavía no está implementado.'
    });
  };

  // POST 
  public static create = (req: Request, res: Response): void => {
    // TODO: Crear ambiente especificando capacidad y ubicación con req.body
    res.status(501).json({
      success: false,
      message: 'La creación de ambiente todavía no está implementada.'
    });
  };

  // PATCH /:id
  public static updatePartial = (req: Request, res: Response): void => {
    const { id } = req.params;
    // Actualizar 
    res.status(501).json({
      success: false,
      message: `La actualización parcial del ambiente ${id} todavía no está implementada.`
    });
  };
}