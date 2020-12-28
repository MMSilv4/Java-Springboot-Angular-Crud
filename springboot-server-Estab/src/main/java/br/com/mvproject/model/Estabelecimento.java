package br.com.mvproject.model;

import javax.persistence.*;

@Entity
@Table(name = "estabelecimento")

public class Estabelecimento {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "endereco")
	private String endereco;
	
	@Column(name = "telefone")
	private String telefone;
	
	public Estabelecimento() {
		
	}
	
	public Estabelecimento(String nome, String endereco, String telefone) {
		
		this.nome = nome;
		this.endereco = endereco;
		this.telefone = telefone;
		
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public long getId() {
		return id;
	}
	
	@Override
	public String toString() {
		return "Estabelecimento [id=" +id+ ", nome=" +nome+ ", endereco=" +endereco+ ", telefone=" +telefone+  "]";
	}
	
}
