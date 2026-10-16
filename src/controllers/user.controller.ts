import { Request, Response } from 'express';

export class UserController {
  // GET /api/v1/users
  public static getAll = (req: Request, res: Response): void => {
    // TODO: Obtener listado completo de usuarios
    res.status(501).json({
      success: false,
      message: 'La obtención de usuarios todavía no está implementada.'
    });
  };

  // POST /api/v1/users
  public static create = (req: Request, res: Response): void => {
    // TODO: Registrar nuevo perfil (estudiante, docente, administrador) usando req.body
    res.status(501).json({
      success: false,
      message: 'El registro de usuario todavía no está implementado.'
    });
  };

  // GET /api/v1/users/:id
  public static getById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: Consultar detalles del usuario por ID
    res.status(501).json({
      success: false,
      message: `La consulta del usuario ${id} todavía no está implementada.`
    });
  };

  // PATCH /api/v1/users/:id
  public static updatePartial = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: Actualizar parcialmente rol, estado o contraseña usando req.body
    res.status(501).json({
      success: false,
      message: `La actualización parcial del usuario ${id} todavía no está implementada.`
    });
  };

  // DELETE /api/v1/users/:id
  public static deleteLogical = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: Inactivar/Eliminar lógicamente al usuario
    res.status(501).json({
      success: false,
      message: `El borrado lógico del usuario ${id} todavía no está implementado.`
    });
  };
}