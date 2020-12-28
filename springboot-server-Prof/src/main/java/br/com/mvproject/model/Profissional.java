package br.com.mvproject.model;

import javax.persistence.*;

@Entity
@Table(name = "profissional")

public class Profissional {

    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "endereco")
	private String endereco;
	
	@Column(name = "telefone")
    private String telefone;
    
    @Column(name = "celular")
    private String celular;
    
    @Column(name = "funcao")
	private String funcao;
	
	public Profissional() {
		
	}
	
	public Profissional(String nome, String endereco, String telefone, String celular, String funcao) {
		
		this.nome = nome;
		this.endereco = endereco;
        this.telefone = telefone;
        this.celular = celular;
        this.funcao = funcao;
		
    }

    public long getId() {
        return id;
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

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getFuncao() {
        return funcao;
    }

    public void setFuncao(String funcao) {
        this.funcao = funcao;
    }
    
    @Override
	public String toString() {
		return "Profissional [id=" +id+ ", nome=" +nome+ ", endereco=" +endereco+ ", telefone=" +telefone+ ", celular=" +celular+ " funcao="+funcao+"]";
	}
    

}
