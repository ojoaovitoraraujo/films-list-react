import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './FilmForm.css'
import { addFilm } from '../../services/FilmsServices';
import Film from '../../interfaces/IFilm';

interface Film123 {
  name: string;
  image: string;
  description: string;
  genre: string;
  director: string;
  duration: number;
  avaliation: number;

}
export default function FilmForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Film>();

  const onSubmit = async (data: Film) => { 
    data.duration = Number(data.duration);
    data.avaliation = Number(data.avaliation);
    const filmData = [{ ...data, favorite: false }]; // Adicionando a chave 'favorite' ao objeto
  
    console.log(filmData)
    try {
      await addFilm(filmData);
      alert("Filme cadastrado com sucesso");
    } catch (error) {
      console.error("Erro ao cadastrar filme:", error);
    }
  };


  return (
    <div className="app-container">
      <div className="form-group">
        <label>Name</label>
        <input
          className={errors?.name && "input-error"}
          type="text"
          placeholder="Your name"
          {...register("name", { required: true })}
        />
        {errors?.name?.type === "required" && (
          <p className="error-message">Name is required.</p>
        )}
      </div>

      <div className="form-group">
        <label>Image</label>
        <input
          className={errors?.image && "input-error"}
          type="text"
          placeholder="Your e-mail"
          {...register("image", {
            required: true,
          })}
        />
        {errors?.image?.type === "required" && (
          <p className="error-message">image is required.</p>
        )}

        {errors?.image?.type === "validate" && (
          <p className="error-message">image is invalid.</p>
        )}
      </div>

      <div className="form-group">
        <label>description</label>
        <input
          className={errors?.description && "input-error"}
          type="description"
          placeholder="description"
          {...register("description", { required: true, minLength: 7 })}
        />

        {errors?.description?.type === "required" && (
          <p className="error-message">description is required.</p>
        )}

        {errors?.description?.type === "minLength" && (
          <p className="error-message">
            description needs to have at least 7 characters.
          </p>
        )}
      </div>

      <div className="form-group">
        <label>Genre</label>
        <input
          className={errors?.genre && "input-error"}
          type="text"
          placeholder="Genre"
          {...register("genre", {
            required: true,
          })}
        />
        {errors?.genre?.type === "required" && (
          <p className="error-message">Password confirmation is required.</p>
        )}
      </div>

      <div className="form-group">
        <label>duration</label>
        <input
          className={errors?.duration && "input-error"}
          type="number"
          placeholder="duration"
          {...register("duration", {
            required: true,
          })}
        />
        {errors?.duration?.type === "required" && (
          <p className="error-message">Password confirmation is required.</p>
        )}
      </div>

      <div className="form-group">
        <label>avaliation</label>
        <input
          className={errors?.avaliation && "input-error"}
          type="number"
          placeholder="avaliation"
          {...register("avaliation", {
            required: true,
          })}
        />
        {errors?.avaliation?.type === "required" && (
          <p className="error-message">Password confirmation is required.</p>
        )}
      </div>

      <div className="form-group">
        <label>director</label>
        <input
          className={errors?.director && "input-error"}
          type="text"
          placeholder="director"
          {...register("director", {
            required: true,
          })}
        />
        {errors?.director?.type === "required" && (
          <p className="error-message">Password confirmation is required.</p>
        )}
      </div>

      

      <div className="form-group">
        <button onClick={() => handleSubmit(onSubmit)()}>Criar conta</button>
      </div>
    </div>
  )
}
