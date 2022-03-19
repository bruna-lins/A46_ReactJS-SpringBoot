package br.com.apiagencia46.pacote;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.com.apiagencia46.pacote.model.Destinos;
import br.com.apiagencia46.pacote.repository.DestinosRepository;

@SpringBootApplication
public class ApiAgenciaA46Application implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(ApiAgenciaA46Application.class, args);
	}
	
	@Autowired
	private DestinosRepository destinosRepository;
	
	@Override
	public void run(String... args) throws Exception { 
		//      Destinos destino = new Destinos();
		//		destino.setNome("Seul");
		//		destino.setPais("Coreia do Sul");
		//		destino.setDescricao("Venha conhecer Seul");
		//		destino.setValor(1000);
		//		destinosRepository.save(destino);
		
		//		Destinos destino2 = new Destinos();
		//		destino2.setNome("Salvador");
		//		destino2.setPais("Brasil");
		//		destino2.setDescricao("Venha conhecer Salvador");
		//		destino2.setValor(200);
		//		destinosRepository.save(destino2);
	}

}
