var N=null,E="",T="t",U="u",searchIndex={};
var R=["kubernix","ipnetwork","option","fallible","config","result","try_from","try_into","borrow_mut","borrow","to_owned","clone_into","type_id","argmatches","subcommand","formatter","deserialize","serialize","from_argmatches","into_app","SubCommand","Kubernix"];
searchIndex["kubernix"]={"doc":R[0],"i":[[3,"Config",R[0],"The global configuration",N,N],[3,R[21],E,"The main entry point for the application",N,N],[4,R[20],E,"Possible subcommands",N,N],[13,"Shell",E,"`shell` subcommand specified",0,N],[11,R[14],E,"All available subcommands",1,[[["self"]],[R[2]]]],[11,"root",E,"The root path during runtime",1,[[["self"]],["pathbuf"]]],[11,"log_level",E,"The logging level of the application",1,[[["self"]],["levelfilter"]]],[11,"crio_cidr",E,"The CIDR used for the CRI-O CNI network",1,[[["self"]],[R[1]]]],[11,"cluster_cidr",E,"The CIDR used for the whole cluster network",1,[[["self"]],[R[1]]]],[11,"service_cidr",E,"The CIDR used for the service network",1,[[["self"]],[R[1]]]],[11,"overlay",E,"The Nix package overlay to be used",1,[[["self"]],[R[2]]]],[11,"impure",E,"Do not clear the current env during bootstrap",1,[[["self"]],["bool"]]],[11,"packages",E,"Additional dependencies to be added to the environment",1,[[["self"]],["vec"]]],[11,"canonicalize_root",E,"Make the configs root path absolute",1,[[["self"]],[R[3]]]],[11,"to_file",E,"Write the current configuration to the internal set root…",1,[[["self"]],[R[3]]]],[11,"update_from_file",E,"Read the configuration from the internal set root path",1,[[["self"]],[R[3]]]],[11,"start",E,"Start kubernix by consuming the provided configuration",2,[[[R[4]]],[R[3]]]],[11,"new_shell",E,"Spawn a new shell into the provided configuration…",2,[[[R[4]]],[R[3]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[10],E,E,1,[[["self"]],[T]]],[11,R[11],E,E,1,[[["self"],[T]]]],[11,"into",E,E,1,[[],[U]]],[11,R[6],E,E,1,[[[U]],[R[5]]]],[11,R[7],E,E,1,[[],[R[5]]]],[11,R[8],E,E,1,[[["self"]],[T]]],[11,R[9],E,E,1,[[["self"]],[T]]],[11,R[12],E,E,1,[[["self"]],["typeid"]]],[11,"vzip",E,E,1,[[],["v"]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[],[U]]],[11,R[6],E,E,2,[[[U]],[R[5]]]],[11,R[7],E,E,2,[[],[R[5]]]],[11,R[8],E,E,2,[[["self"]],[T]]],[11,R[9],E,E,2,[[["self"]],[T]]],[11,R[12],E,E,2,[[["self"]],["typeid"]]],[11,"vzip",E,E,2,[[],["v"]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[10],E,E,0,[[["self"]],[T]]],[11,R[11],E,E,0,[[["self"],[T]]]],[11,"into",E,E,0,[[],[U]]],[11,R[6],E,E,0,[[[U]],[R[5]]]],[11,R[7],E,E,0,[[],[R[5]]]],[11,R[8],E,E,0,[[["self"]],[T]]],[11,R[9],E,E,0,[[["self"]],[T]]],[11,R[12],E,E,0,[[["self"]],["typeid"]]],[11,"vzip",E,E,0,[[],["v"]]],[11,"from",E,E,1,[[[R[13]]],["self"]]],[11,"from",E,E,0,[[[R[13]]],["self"]]],[11,"default",E,E,1,[[],["self"]]],[11,"drop",E,E,2,[[["self"]]]],[11,"into",E,E,1,[[],["app"]]],[11,"into",E,E,0,[[],["app"]]],[11,"clone",E,E,1,[[["self"]],[R[4]]]],[11,"clone",E,E,0,[[["self"]],[R[14]]]],[11,"fmt",E,E,1,[[["self"],[R[15]]],[R[5]]]],[11,"fmt",E,E,0,[[["self"],[R[15]]],[R[5]]]],[11,R[16],E,E,1,[[["__d"]],[R[5]]]],[11,R[16],E,E,0,[[["__d"]],[R[5]]]],[11,R[17],E,E,1,[[["self"],["__s"]],[R[5]]]],[11,R[17],E,E,0,[[["self"],["__s"]],[R[5]]]],[11,R[18],E,E,1,[[[R[13]]],["self"]]],[11,R[18],E,E,0,[[[R[13]]],["self"]]],[11,R[19],E,E,1,[[],["app"]]],[11,R[19],E,E,0,[[],["app"]]]],"p":[[4,R[20]],[3,"Config"],[3,R[21]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);