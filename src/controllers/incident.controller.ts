import { Request, Response } from 'express';

export class IncidentController {
  // GET /api/v1/incidents
  public static getAll = (req: Request, res: Response): void => {
    // TODO: Consultar historial completo de incidencias
    res.status(501).json({
      success: false,
      message: 'El historial de novedades todavía no está implementado.'
    });
  };

  // POST /api/v1/incidents
  public static create = (req: Request, res: Response): void => {
    // TODO: Crear reporte asociado a equipo o ambiente usando req.body
    res.status(501).json({
      success: false,
      message: ' El reporte de novedad todavía no está implementado.'
    });
  };

  // PATCH /api/v1/incidents/:id
  public static updateStatus = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: Cambiar estado (ej: "pendiente", "en proceso", "resuelto") con req.body
    res.status(501).json({
      success: false,
      message: `La actualización del estado de la novedad ${id} todavía no está implementada.`
    });
  };
}